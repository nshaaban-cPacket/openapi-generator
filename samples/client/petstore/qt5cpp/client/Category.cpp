/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


#include "Category.h"

#include "SWGHelpers.h"

#include <QJsonDocument>
#include <QJsonArray>
#include <QObject>
#include <QDebug>

namespace Swagger {

<<<<<<< HEAD:samples/client/petstore/qt5cpp/client/Category.cpp

Category::Category(QString* json) {
=======
SWGCategory::SWGCategory(QString* json) {
>>>>>>> origin/master:samples/client/petstore/qt5cpp/client/SWGCategory.cpp
    init();
    this->fromJson(*json);
}

Category::Category() {
    init();
}

Category::~Category() {
    this->cleanup();
}

void
Category::init() {
    id = 0L;
    name = new QString("");
}

void
Category::cleanup() {
    

    if(name != nullptr) {
        delete name;
    }
}

Category*
Category::fromJson(QString &json) {
    QByteArray array (json.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
    return this;
}

void
Category::fromJsonObject(QJsonObject &pJson) {
    ::Swagger::setValue(&id, pJson["id"], "qint64", "");
    ::Swagger::setValue(&name, pJson["name"], "QString", "QString");
}

QString
Category::asJson ()
{
    QJsonObject* obj = this->asJsonObject();
    
    QJsonDocument doc(*obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject*
Category::asJsonObject() {
    QJsonObject* obj = new QJsonObject();
    
    obj->insert("id", QJsonValue(id));

    toJsonValue(QString("name"), name, obj, QString("QString"));

    return obj;
}

qint64
Category::getId() {
    return id;
}
void
Category::setId(qint64 id) {
    this->id = id;
}

QString*
Category::getName() {
    return name;
}
void
Category::setName(QString* name) {
    this->name = name;
}


}

