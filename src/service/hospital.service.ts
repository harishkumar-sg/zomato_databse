import { Hospital } from "@database/model/hospital"
import { HospitalRepo } from "@database/repository/hospitalRepository";
import { DeleteResult, getCustomRepository, getManager, getRepository, Like, UpdateResult } from "typeorm"

export class HospitalService {
    public async createHospital(name : string , pincode : string):Promise<Hospital>{
        const HospitalRepository=getCustomRepository(HospitalRepo)
        return HospitalRepository.customSave(name,pincode)
    }
    public async updateHospital(id:string ,name :string):Promise<UpdateResult>{
        const HospitalRepository=getRepository(Hospital)
        const hospiatlData = await HospitalRepository.update(id,{
            name:name
        })
        return hospiatlData
    }
    public async deleteHospital(id:string ):Promise<DeleteResult>{
        const HospitalRepository=getRepository(Hospital)
        const hospiatlData = await HospitalRepository.delete(id)
        return hospiatlData

    }
    public async getalldata(page?: number ,size?: number,sortBy?:string,keyword?:string):Promise<Hospital[]>{
        const HospitalRepository=getManager().getRepository(Hospital)
        const pincode:string = "pincode";
        const hospiatlData = await HospitalRepository.find({
            select:['name','pincode'],
            skip: (page-1)*size,
            take :size,
            order : {
                   [pincode]: sortBy
            },
            // where:{
            //     name:Like(`%${keyword}%`)
            //  }
        })
        return hospiatlData       
    }
}