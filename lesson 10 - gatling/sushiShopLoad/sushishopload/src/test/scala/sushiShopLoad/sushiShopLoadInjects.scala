package sushiShopLoad

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.structure._
import scala.concurrent.duration.DurationInt

trait sushiShopLoadInjects extends Simulation {

  def perMinute(rate : Double): Double = rate / 60
  def perHour(rate : Double): Double = rate / 3600

  def loader(s1: ScenarioBuilder, s2: ScenarioBuilder, s3: ScenarioBuilder, stringChooser: String): Any = {

    val httpProtocol = http.baseUrl("http://185.233.0.230:3000")

    // Подтверждение производительности
    // Пользователи заходят на сайт с интенсивностью 1 в секунду и делают 1000 заказов в час
    if (stringChooser == "S2") {
      setUp(
        s1.inject(constantUsersPerSec(1) during (60 minutes)).protocols(httpProtocol),
        s2.inject(constantUsersPerSec(perHour(1000)) during (60 minutes)).protocols(httpProtocol)
      ).maxDuration(60 minutes)
    }

    // Подтверждения максимума для кухни - 60 заказов в минуту
    // Пользователи заходят на сайт и делают заказы с интенсивностью от 20 до 100 в минуту с шагом 20
    if (stringChooser == "S3") {
      setUp(
        s3.inject(constantUsersPerSec(perMinute(20)) during (12 minutes),
        constantUsersPerSec(perMinute(40)) during (12 minutes),
        constantUsersPerSec(perMinute(60)) during (12 minutes),
        constantUsersPerSec(perMinute(80)) during (12 minutes),
        constantUsersPerSec(perMinute(100)) during (12 minutes))
          .protocols(httpProtocol)
      ).maxDuration(60 minutes)
    }

    // Поиск реального максимума для сайта
    if (stringChooser == "S3max") {
      setUp(
        s3.inject(incrementConcurrentUsers(1)
          .times(100)
          .eachLevelLasting(20 seconds)
          .startingFrom(1))
        ).maxDuration(300).protocols(httpProtocol)
    }

  }

}
