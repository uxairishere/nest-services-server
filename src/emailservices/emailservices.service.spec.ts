import { Test, TestingModule } from '@nestjs/testing';
import { EmailservicesService } from './emailservices.service';

describe('EmailservicesService', () => {
  let service: EmailservicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailservicesService],
    }).compile();

    service = module.get<EmailservicesService>(EmailservicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
