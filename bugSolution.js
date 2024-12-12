```javascript
import Link from 'next/link';

function MyComponent() {
  const router = useRouter(); // Import useRouter

  const handleClick = (e) => {
    e.preventDefault(); // prevent default behavior
    router.push('/about'); // Use router.push for navigation
  };

  return (
    <div>
      <a href="/about" onClick={handleClick}>
        About Us
      </a>
    </div>
  );
}

export default MyComponent;
```