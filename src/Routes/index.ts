import { Router } from 'express';
import Croutes from './CarRoutes';
import Mroutes from './MotoRoutes';

const router = Router();

router.use(Croutes);
router.use(Mroutes);

export default router;