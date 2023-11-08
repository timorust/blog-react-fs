export interface IBlog {
  message: "Router Message";
  params: {
    id: string;
  };
  data: {
    id: number;
    title: string;
    content: string;
  };
  query: Record<string, unknown>; // This assumes that the 'query' property can have any properties
}

export interface IBlogContent {
  id: number;
  title: string;
  content: string;
}
