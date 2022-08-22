import {Request,Response} from "express"
import { HospitalService } from "@service/hospital.service"



export class HospitalController { 
    private hospitalService : HospitalService;

    constructor(){
        this.hospitalService= new HospitalService()
        
    }
    public createHospital= async (req: Request, res: Response):Promise<void>=>{ 
        const hospitalData = await this.hospitalService.createHospital(req.body.name,req.body.pincode)
        if(hospitalData) 
            res.send('data added successfully')
        else 
            res.send('hospital cant be created')
    }
    public updateHospital = async (req: Request, res: Response):Promise<void>=>{ 
        const hospitalData =  await this.hospitalService.updateHospital(req.params.id,req.body.name)
        res.send(hospitalData)
        
    }
    public deleteHospital = async (req: Request, res: Response):Promise<void>=>{ 
        const hospitalData =  await this.hospitalService.deleteHospital(req.params.id)
        res.send(hospitalData)
        
    }
    public allHospitalData = async (req: Request, res: Response):Promise<void>=>{ 
        const page=req.query.page ?(String)(req.query.page):null;
        const size=req.query.size ?(String)(req.query.size):null;
        const sortBy=req.query.sortBy ?(String)(req.query.sortBy):null;
        const keyword=req.query.keyword ?(String)(req.query.keyword):null;
        

       

        const hospitalData =  await this.hospitalService.getalldata(parseInt(page),parseInt(size) ,sortBy, keyword);
        res.send(hospitalData)
        
    }










}