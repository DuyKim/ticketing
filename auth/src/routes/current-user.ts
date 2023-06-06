import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send({ user: 'use' });
});

export { router as currentUserRouter };
