import { Pagination } from '../clients';

export function parsePagination(page: number, size: number): Pagination {
  return {
    page,
    size
  };
}
