import express, { Request, Response, Router} from 'express';
import { AppartmentService } from '../services/appartments.services';

const router = Router();
const appartmentService = new AppartmentService();

router.get('/', async (req: Request, res: Response) => {
  try{
    const appartments = await appartmentService.getAllAppartments();
    res.json(appartments);
  }catch (error){
    return res.status(400).json({ message: error })
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try{
    const appartmentId = parseInt(req.params.id);
    const appartment = await appartmentService.getAppartmentById(appartmentId);
    if (appartment) {
      res.json(appartment);
    }
    else{
      return res.status(404).json({ message: 'Appartent not found' });
    }
  }catch (error){
     return res.status(400).json({ message: error })
  }
});

router.post('/create', async (req: Request, res: Response) => {
  try{
    const newAppartment = await appartmentService.addAppartment(req.body);
    res.status(201).json(newAppartment);
  }catch (error){
    return res.status(400).json({ message: error })
  }
});

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

export default router;
