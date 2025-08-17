// Get current timestamp as ISO string
export const getTimestamp = (): string => {
  return new Date().toISOString();
};

// Format timestamp to readable date string
export const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Get relative time from timestamp
export const getRelativeTime = (timestamp: string): string => {
  const now: Date = new Date();
  const date: Date = new Date(timestamp);

  // Check if date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 0) return "Future date";
  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  return formatTimestamp(timestamp);
};

// Additional utility: Get time only
export const getTimeOnly = (timestamp: string): string => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return "Invalid time";
  }

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

// Additional utility: Get date only
export const getDateOnly = (timestamp: string): string => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Check if timestamp is today
export const isToday = (timestamp: string): boolean => {
  const date = new Date(timestamp);
  const today = new Date();

  return date.toDateString() === today.toDateString();
};

// Check if timestamp is this week
export const isThisWeek = (timestamp: string): boolean => {
  const date = new Date(timestamp);
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  return date >= weekAgo && date <= now;
};

export const formatDay = (date: Date)=> {
  const day = date.getDate();
  const monthShort = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${monthShort} ${year}`;
}

export const formatTime = (date: Date) => {
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).replace(' ', ''); // Removes space before AM/PM
}