import IbgeApiService from "../service/IbgeApiService"
import cron  from "node-cron";

// config para minutos
cron.schedule("1 * * * * *", () => { IbgeApiService.execute()},{
    scheduled: true,
    timezone: "America/Sao_Paulo"
})
