const router = require("express").Router();
const Document = require("../models/Document");
const Version = require("../models/Version");
const auth = require("../middleware/auth");

// CREATE DOC
router.post("/", auth, async (req, res) => {
  const doc = await Document.create({
    title: req.body.title,
    content: "",
    owner: req.user.id
  });

  res.json(doc);
});

// GET DOCS (ONLY USER RELATED)
router.get("/", auth, async (req, res) => {
  const docs = await Document.find({
    $or: [
      { owner: req.user.id },
      { "collaborators.user": req.user.id }
    ]
  });

  res.json(docs);
});

// GET SINGLE DOC ⚠️ NEW
router.get("/:id", auth, async (req, res) => {
  const doc = await Document.findById(req.params.id);
  res.json(doc);
});

// UPDATE DOC + VERSIONING
router.put("/:id", auth, async (req, res) => {
  const doc = await Document.findById(req.params.id);

  await Version.create({
    documentId: doc._id,
    content: doc.content
  });

  if (req.body.content !== undefined) {
    doc.content = req.body.content;
  }

  if (req.body.title !== undefined) {
    doc.title = req.body.title;
  }

  await doc.save();

  res.json(doc);
});

// ADD COLLABORATOR
router.post("/:id/collab", auth, async (req, res) => {
  const doc = await Document.findById(req.params.id);

  doc.collaborators.push({
    user: req.body.user,
    role: req.body.role
  });

  await doc.save();
  res.json(doc);
});

// GET VERSIONS
router.get("/:id/versions", auth, async (req, res) => {
  const versions = await Version.find({
    documentId: req.params.id
  });

  res.json(versions);
});

// RESTORE VERSION
router.post("/:id/restore/:vid", auth, async (req, res) => {
  const version = await Version.findById(req.params.vid);
  const doc = await Document.findById(req.params.id);

  doc.content = version.content;
  await doc.save();

  res.json(doc);
});

module.exports = router;