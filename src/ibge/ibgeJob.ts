import IbgeApiService from "../service/IbgeApiService"
import cron  from "node-cron";


cron.schedule("* * * * * *", () => { IbgeApiService.execute()},{
    scheduled: true,
    timezone: "America/Sao_Paulo"
})
