import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableKuesioner, isiTableSurvey } from "./controller/get.js";
import { urlAPI, urlAPISurvey } from "./config/url.js";
get(urlAPI, isiTableKuesioner);
get(urlAPISurvey, isiTableSurvey);

