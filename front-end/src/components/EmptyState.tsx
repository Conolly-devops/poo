interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="text-center py-20 px-5 text-muted-foreground">
      <div className="text-5xl mb-4">{icon}</div>
      <div className="font-heading text-xl font-extrabold text-arena-blue-dark mb-2">{title}</div>
      <p>{description}</p>
    </div>
  );
}
