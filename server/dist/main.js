"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const topics_module_1 = require("./topics.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(topics_module_1.TopicsModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map