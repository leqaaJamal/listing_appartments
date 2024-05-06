import { AppDataSource } from "../../app-data-source"
import { AppartmentEntity } from '../entities/appartment.entity';

export class AppartmentService {
  private appartmentRepo = AppDataSource.getRepository(AppartmentEntity)

  async getAllAppartments(): Promise<AppartmentEntity[]> {
      let apartments = await this.appartmentRepo.find()
      return apartments;
  }

  async getAppartmentById(id: number): Promise<AppartmentEntity | null> {
    return await this.appartmentRepo.findOneBy({id:id});
  }

  async addAppartment(appartmentData: Partial<AppartmentEntity>): Promise<AppartmentEntity> {
    const apartment = this.appartmentRepo.create(appartmentData);
    return await this.appartmentRepo.save(apartment);
  }
}