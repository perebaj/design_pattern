import {AbstractCrawlerA} from "./abstract_products"
import { CrawlerASchema } from "./crawler_schema";

export class ConcreteProductA1 implements AbstractCrawlerA{
    fetch_page(): CrawlerASchema {
        throw new Error("Method not implemented.");
    }

}