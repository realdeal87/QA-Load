package sushiShopLoad

import sushiShopLoad.sushiShopLoadMethods._
import io.gatling.core.Predef._
import io.gatling.core.structure._

class sushiShopLoadSimulation extends Simulation with sushiShopLoadInjects {

  def scenarioOne: ScenarioBuilder = scenario("scenarioOne").exec(openMainPage)
  def scenarioTwo: ScenarioBuilder = scenario("scenarioTwo").exec(makeAnOrder)
  def scenarioThree: ScenarioBuilder = scenario("scenarioThree").exec(openMainPage, makeAnOrder)

  loader(scenarioOne, scenarioTwo, scenarioThree, "S3max")

}
