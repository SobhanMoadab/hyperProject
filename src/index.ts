import { app } from "./shared/infra/http/app";
import "./shared/infra/database";

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`[APP]: Listening on port ${port}`);
});
