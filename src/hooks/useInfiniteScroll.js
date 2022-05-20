import { useEffect } from "react";
import { useTrackVisibility } from "react-intersection-observer-hook";

const DEFAULT_DELAY_IN_MS = 100;

// This is helper hook that will be used to track visibility of the element (loading indicator)
// and call the callback function when the element is visible.
// It is used to load more data when the user scrolls to the bottom of the page/container.
export const useInfiniteScroll = ({ loading, onLoadMore }) => {
  const [ref, { rootRef, isVisible }] = useTrackVisibility();

  const shouldLoadMore = !loading && isVisible;

  useEffect(() => {
    if (shouldLoadMore) {
      // When we trigger 'onLoadMore' and new items are added to the list,
      // right before they become rendered on the screen, 'loading' becomes false
      // and 'isVisible' can be true for a brief time, based on the scroll position.
      // So, it triggers 'onLoadMore' just after the first one is finished.
      // We use a small delay here to prevent this kind of situations.
      const timer = setTimeout(() => {
        onLoadMore();
      }, DEFAULT_DELAY_IN_MS);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [onLoadMore, shouldLoadMore]);

  return [ref, { rootRef }];
};
