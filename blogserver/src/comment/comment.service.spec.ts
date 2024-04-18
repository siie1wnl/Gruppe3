import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { CommentModule } from './comment.module';

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CommentModule],
    }).compile();

    service = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
