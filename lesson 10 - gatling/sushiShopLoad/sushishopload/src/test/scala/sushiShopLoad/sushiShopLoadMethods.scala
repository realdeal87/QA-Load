package sushiShopLoad

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.structure._

object sushiShopLoadMethods {

  val openMainPage: ChainBuilder = exec(http("openMainPage")
    .get("/")
    .check(status.is(200),
      substring("error").notExists)
  )

  val makeAnOrder: ChainBuilder = exec(http("makeAnOrder")
    .post("/api/orders")
    .header("content-type",	"application/json")
    .body(RawFileBody("orderParams.json")).asJson
    .check(status.is(200),
      substring("error").notExists,
      jsonPath("$..createdAt").saveAs("createdAt"),
      jsonPath("$.._id").saveAs("id"))
  )

}
