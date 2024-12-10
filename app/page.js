import Image from "next/image";

export default function Home() {
  return (
      <div style={{
        backgroundColor: '#ffff',
        height: '100vh',
        color: '#000'
        }}>
    <h1>
      403 . Forbidden
    </h1>
      <p>
        You do not have permission to access this resource.
      </p>
  </div>
  );
};