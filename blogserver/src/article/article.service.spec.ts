import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';
import { ArticleDTO } from './DTO/article.dto';
import { ArticleModule } from './article.module';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ArticleModule],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  test("find all articles", async () => {
    let articles = await service.findAll();
    if (articles.length > 0){
      let knownIds: Set<string> = new Set();
      articles.forEach(article => {
        if(!knownIds.has(article._id)){
          knownIds.add(article._id);
        }
      });
      expect(articles).toHaveLength(knownIds.size);
    }
    else {
      expect(articles).toHaveLength(0);
    }
  });
  test("find article by id", async () => {
    let id = "6332ee404762b74699b88c54";
    let article = await service.find(id);
    expect(article._id).toBe(id);
  });
  test("find empty string", async () => {
    let id = "";
    let article = await service.find(id);
    expect(article).toBeNull();
  });
  test("update article", async () => {
    let id = "63406e3091a1bc8e94ba8281";
    let articleDto: ArticleDTO = { _id: id, title: "bla", author: "bla", description: "bla" , content: "sdfsdf", comments: [], image: null };
    let article = await service.update(id, articleDto)
    expect(article._id).toBe(id);
  });
  test("delete article", async () => {
    let id = "63970cffddd60a8ce6107bab";
    let article = await service.delete(id);
    expect(article._id).toBe(id);
  });
  test("delete empty string", async () => {
    let id = "";
    let article = await service.delete(id);
    expect(article).toBeNull();
  });
  test("create new article", async () => {
    let title = "foo";
    let author = "bar";
    let description = "foobar";
    let content = "irgendein Text";
    let comments= [];
    let image = null;
    let articleDto: ArticleDTO = { _id: null, title: title, author: author, description: description , content: content, comments: comments, image: image };
    let article = await service.create(articleDto);
    expect(article.title).toBe(title);
    expect(article.author).toBe(author);
    expect(article.description).toBe(description);
    expect(article.content).toBe(content);
    expect(article.comments).toBe(comments);
    expect(article.image).toBe(image);
  });
});
