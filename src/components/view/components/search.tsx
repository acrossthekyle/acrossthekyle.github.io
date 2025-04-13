import Link from 'next/link';

import Images from '@/images';
import Styles from '@/styles';

import Loading from '../../loading';

import { useViewModel } from './search.viewModel';

const scss = Styles.Components.View.Components.Search;

type Props = {
  isSearching: boolean;
  onClose: () => void;
};

function Search({ isSearching, onClose }: Props) {
  const { items, handleOnSearch, isLoading, isReady, query, total } =
    useViewModel();

  return (
    <div
      aria-labelledby="search-label"
      aria-modal="true"
      className={scss.find}
      data-active={isSearching}
      role="dialog"
      tabIndex={-1}
    >
      <div className={scss.container}>
        <div className={scss.input}>
          <button
            aria-label="Close Search"
            className={scss.close}
            onClick={onClose}
            title="Close search"
            type="button"
          >
            <Images.Icons.Close />
          </button>
          <label
            className={scss.label}
            id="search-label"
            htmlFor="search-input"
          >
            Search
          </label>
          <input
            autoComplete="off"
            className={scss.field}
            id="search-input"
            onChange={handleOnSearch}
            placeholder="Type to search..."
            type="text"
            value={query}
          />
        </div>
        <div className={scss.results}>
          {isLoading && <Loading />}
          {isReady && (
            <>
              <h2 className={scss.total}>{`Found ${total} results`}</h2>
              <div role="list">
                {items.map(({ subTitle, title, uri }) => (
                  <div className={scss.result} key={uri} role="listitem">
                    <h3>
                      <Link
                        aria-label={`${title} ${subTitle}`}
                        href={uri}
                        onClick={onClose}
                        target={
                          title.toLowerCase().includes('resume')
                            ? '_blank'
                            : '_self'
                        }
                      >
                        {title}
                      </Link>
                    </h3>
                    <div className={scss.date}>
                      <time>{subTitle}</time>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
