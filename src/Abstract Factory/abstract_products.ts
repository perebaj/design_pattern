import {CrawlerASchema} from "./crawler_schema"
export interface AbstractCrawlerA {
    fetch_page(): CrawlerASchema;
}