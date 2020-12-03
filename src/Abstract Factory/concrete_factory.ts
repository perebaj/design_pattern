import {AbstractCrawlerFactory} from "./abstract_factory"
import {AbstractCrawlerA} from "./abstract_products"

class ConcreteCrawlerFactory implements AbstractCrawlerFactory{

    createCrawlerA(): AbstractCrawlerA {
        throw new Error("Method not implemented.");
    }
}

