package grpcServiceLoad

import books.books.{BookList, Empty}
import books.books.BookServiceGrpc.BookService
import com.google.protobuf.empty.Empty
import io.gatling.core.Predef._
import io.gatling.core.session.Expression
import io.gatling.http.Predef._

import scala.concurrent.duration._
import com.github.phisgr.gatling.grpc.Predef._
import com.github.phisgr.gatling.grpc.protocol.GrpcProtocol
import io.gatling.core.structure.ScenarioBuilder
import io.grpc.ManagedChannelBuilder

import com.github.phisgr.gatling.grpc.action.GrpcCallActionBuilder
import com.github.phisgr.gatling.pb.value2ExprUpdatable

class BasicItSimulation extends Simulation {

  val grpcConf: GrpcProtocol = grpc(ManagedChannelBuilder.forAddress("http://185.233.0.230", 50051))

  val callBook: Expression[books.books.Empty] = books.books.Empty().updateExpr()

  val bookListCall: GrpcCallActionBuilder[books.books.Empty, BookList] = grpc("bookListCall")
    .rpc(books.books.BookServiceGrpc.METHOD_LIST)
    .payload(callBook)

  val bookScenario: ScenarioBuilder = scenario("bookList")
    .exec("bookListCall")

  setUp(bookScenario.inject(constantUsersPerSec(50) during (15 minutes)).protocols(grpcConf))
}