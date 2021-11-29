# NestJS REST API

Простой API на NodeJS фреймворке

Реализованы 5 Rest запросов

* # GET("/products")
    *  Возвращает все продукты из БД
* # GET("/products/{:id}")
    *  Возвращает продукт по ID из БД
* # POST("/products/") - BODY {Product}
    *  Записывает продукт в БД из тела запроса
* # DELETE("/products/{:id}")
    *  Удаляет продукт по ID из БД
* # PUT("/products/{:id}") - BODY {Product}
    *  Обновляет продукт в БД по ID, информацию берет из тела запроса
