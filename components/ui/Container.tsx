interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'nav';
  maxWidth?: 'content' | 'wide' | 'nav';
  id?: string;
}

const maxWidthMap = {
  content: 'max-w-content',
  wide: 'max-w-wide',
  nav: 'max-w-nav',
};

export default function Container({
  children,
  className = '',
  as: Tag = 'div',
  maxWidth = 'content',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full px-6 md:px-8 ${maxWidthMap[maxWidth]} ${className}`}
    >
      {children}
    </Tag>
  );
}
