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
              <h4 className={scss.total}>{`Found ${total} results`}</h4>
              <div role="list">
                {items.map(({ subTitle, title, uri }) => (
                  <Link
                    aria-label={`${title} ${subTitle}`}
                    className={scss.result}
                    href={uri}
                    onClick={onClose}
                    key={uri}
                    role="listitem"
                    target={
                      title.toLowerCase().includes('resume')
                        ? '_blank'
                        : '_self'
                    }
                  >
                    <div aria-hidden="true" className={scss.title}>
                      {title}
                    </div>
                    <span aria-hidden="true" className={scss.date}>
                      <time>{subTitle}</time>
                    </span>
                  </Link>
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
