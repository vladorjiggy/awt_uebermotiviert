# IT-Konzept / Ein Blog über Reisen

## 1. Gesamtüberblick

### 1.1 Beschreibung der Seite

Das Projekt, welches wir im Rahmen des Kurses umsetzten wollen, wird
ein Blog sein. Der Blog wird speziell zu dem Thema Reisen sein. Der User
des Blogs (Admin des Blogs) soll Beiträge erstellen, editieren und löschen
können. Besucher der Blog-Seiten können die Beiträge lesen. Die Titel der
Beiträge können über eine Suchfunktion gefunden werden. Des Weiteren
sollen die Beiträge durch gesetzte Kategorien gefiltert angezeigt werden
können. 

### 1.2 Zielgruppe

Personen der Zielgruppe „Leser“: Privatpersonen, die sich für das Thema
Reisen interessieren
Personen der Zielgruppe „User/Admin“: Privatpersonen, die gerne über
Reisen berichten und dazu ein minimalistisches CMS nutzen möchten

### 1.3 Funktionen der Seite

- User bekommt ein Adminname mit default adminPasswort erstellt
beim Systemstart
- beim Einloggen dann default Passwort ändern in persönliches
Passwort
- User kann Beiträge erstellen, editieren, löschen
- Beiträge erstellen: können getaggt werden ODER Kategorien (Muss:
initialisieren 5 vorgefertigte Kategorien, Kann: Kategorien anlegen,
editieren, löschen)
- Kategorien/Filter: Länder aufzählen
- Suchfunktion (Suche nach Titeln)
- Aus Besuchersicht: Blog
- Aus Usersicht: CMS

### 1.4 Nutzer- und Berechtigungskonzept

- Besucher hat nur Read-Rechte für die Blog-Artikel
- Es gibt nur einen User = Adminrechte
- Admin kann Beiträge erstellen, editieren und löschen

### 1.5 Voraussetzung für die Nutzung der Webseite

- Browser in dem JavaScript erlaubt sein muss
- Cookies müssen erlaubt sein, zumindest bei Admin

### 1.6 Eventuelle Features

- Kommentar-System
- Up- & Downvotes als Bewertungssystem (vergleichbar mit „Likes“)


## 2. Generelle Überlegungen

- Umsetzung im Scrum Modus
- Trennung von Backend und Frontend
  - Backend hat eine API-Spezifikation
- Datenbanktechnologie soll austauschbar sein
  - Nutzung ODM
- User bleibt eine gewisse Zeit lang eingeloggt (Session-Management)
- Daten im Frontend werden zwischengespeichert um aus
Performancegründen HTTP-Requests zu sparen

## 3. Architektur

### 3.1 Technologien

- Frontend: React
  - Statemanagement: Redux
  - Routing: React Router
- Backend: NodeJs / Express
  - Sessionmanagement: Express-Session + SessionCookie
- Sessionstorage: MongoDB
- Datenbank: MongoDB Atlas
  - ODM: mongoose
- Design: Stylesheets Erstellung mit Sass + Bootstrap

## 3.2 Anwendungsdiagramm

![Anwendungsdiagramm](https://github.com/vladorjiggy/awt_uebermotiviert/blob/main/Architektur.png)

## 3.3 Deployment

- Heroku

## 4. Projektweite Technologien

- Planung: [Trello](https://trello.com/b/bXSeorLS/projektplanung)
- Kommunikation: Discord
- API-Spezifikation: ![Swagger](https://app.swaggerhub.com/apis/awt-uebermotiviert/AWT/1.0.0)
- Versionsverwaltung: Git
- Repository: [Github](https://github.com/vladorjiggy/awt_uebermotiviert.git)
