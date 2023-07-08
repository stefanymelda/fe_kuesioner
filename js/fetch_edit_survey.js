import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit_survey.js";
import { urlFetch } from "./config/url_get_detail_survey.js";

get(urlFetch, isiData);
