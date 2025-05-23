import React from 'react';

type Props = {
  className?: string;
};

function Backpack({ className }: Props) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -5 24 24"
    >
      <path d="M6 14a1 1 0 0 0 2 0h3c.729 0 1.412-.195 2-.535V18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.535c.588.34 1.271.535 2 .535h3zm2-1v-3a1 1 0 1 0-2 0v3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H8zM5 3H3c-.345 0-.68.044-1 .126V1.5a1.5 1.5 0 0 1 3 0V3zm7 .126A4.007 4.007 0 0 0 11 3H9V1.5a1.5 1.5 0 0 1 3 0v1.626z" />
    </svg>
  );
}

export default Backpack;
