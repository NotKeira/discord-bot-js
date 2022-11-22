/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("data");
    dbo.createCollection("banLogs", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
    });
    var dbo = db.db("data");
    dbo.createCollection("modLogs", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("data");
    dbo.createCollection("banLogs", function(err, res) {
      if (err) throw err;
      console.log("Ban Collection Created!");
    });
    var dbo = db.db("data");
    dbo.createCollection("modLogs", function(err, res) {
      if (err) throw err;
      console.log("Mod Collection Created!");
    });
    dbo.createCollection("purgeLogs", function(err,res) {
      if (err) throw err;
      console.log("Purge Collection Created!");
    });
    dbo.createCollection("warnLogs", function(err,res) {
      if (err) throw err;
      console.log("Warn Collection Created!");
      db.close();
    });
  });

  MongoClient.connect(mcsrv, function (err, db) {
  if (err) throw err;
  var dbo = db.db("public");
  dbo.createCollection("banLogs", function (err, res) {
    if (err) throw err;
    console.log("Ban Collection Created!");
  });
  dbo.createCollection("modLogs", function (err, res) {
    if (err) throw err;
    console.log("Mod Collection Created!");
  });
  dbo.createCollection("purgeLogs", function (err, res) {
    if (err) throw err;
    console.log("Purge Collection Created!");
  });
  dbo.createCollection("warnLogs", function (err, res) {
    if (err) throw err;
    console.log("Warn Collection Created!");
  });
  dbo.createCollection("serverData", function (err, res) {
    if (err) throw err;
    console.log("ServerData Collection Created!");

    db.close();
  });
});

























  */
