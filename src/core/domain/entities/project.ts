export interface ProjectEntity {
  title: string;
  description: string;
  layer: "app" | "core" | "infra" | "test";
}
