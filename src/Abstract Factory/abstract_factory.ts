import {AbstractCrawlerA} from "./abstract_products"

export interface AbstractCrawlerFactory{
    createCrawlerA(): AbstractCrawlerA;

}

