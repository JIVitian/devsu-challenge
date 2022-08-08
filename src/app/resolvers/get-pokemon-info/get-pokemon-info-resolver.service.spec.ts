import { TestBed } from '@angular/core/testing';

import { GetPokemonInfoResolverService } from './get-pokemon-info-resolver.service';

describe('GetPokemonInfoResolverService', () => {
  let service: GetPokemonInfoResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokemonInfoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
