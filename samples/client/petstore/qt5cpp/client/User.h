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

/*
<<<<<<< HEAD:samples/client/petstore/qt5cpp/client/User.h
 * User.h
=======
 * SWGUser.h
>>>>>>> origin/master:samples/client/petstore/qt5cpp/client/SWGUser.h
 * 
 * A User who is purchasing from the pet store
 */

#ifndef User_H_
#define User_H_

#include <QJsonObject>


#include <QString>

#include "SWGObject.h"


namespace Swagger {

class User: public SWGObject {
public:
    User();
    User(QString* json);
    virtual ~User();
    void init();
    void cleanup();

    QString asJson ();
    QJsonObject* asJsonObject();
    void fromJsonObject(QJsonObject &json);
    User* fromJson(QString &jsonString);

    qint64 getId();
    void setId(qint64 id);

    QString* getUsername();
    void setUsername(QString* username);

    QString* getFirstName();
    void setFirstName(QString* first_name);

    QString* getLastName();
    void setLastName(QString* last_name);

    QString* getEmail();
    void setEmail(QString* email);

    QString* getPassword();
    void setPassword(QString* password);

    QString* getPhone();
    void setPhone(QString* phone);

    qint32 getUserStatus();
    void setUserStatus(qint32 user_status);


private:
    qint64 id;
    QString* username;
    QString* first_name;
    QString* last_name;
    QString* email;
    QString* password;
    QString* phone;
    qint32 user_status;
};

}

#endif /* User_H_ */
