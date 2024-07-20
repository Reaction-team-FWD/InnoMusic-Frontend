import api from '@/api/Api';
import { SearchResult } from '@/entities/search/models';

class SearchService {
  async searchEverywhere(query: string): Promise<SearchResult> {
    return await api.fetch(`/search/everywhere?query=${query}`);
  }
}

const searchService = new SearchService();

export default searchService;
