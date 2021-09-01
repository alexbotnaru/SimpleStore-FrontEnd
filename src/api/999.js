import api from './api';
export const fetchSuggestions = (search) => api.get('suggestions', {params: {search}});
export const fetchProducts = (linkBase64) => api.get('page', {params: {linkBase64}});
export const fetchItem = (link) => api.get('item', {params: {link}});
export const fetchCategories = () => api.get('categories', {params:''});