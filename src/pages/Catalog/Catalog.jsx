import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectLoading } from 'redux/selectors';
import { fetchAdverts } from 'redux/operations';
import { AdvertsList, Container, Section } from 'components';
import { ButtonLoadMore } from './Catalog.styled';

export default function Catalog() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const loading = useSelector(selectLoading);
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem('page');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const visibleAdverts = adverts.slice(0, page * itemsPerPage);

  useEffect(() => {
    localStorage.setItem('page', page.toString());
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <Section>
        <AdvertsList adverts={visibleAdverts} />
        {visibleAdverts.length < adverts.length && !loading && (
          <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
        )}
      </Section>
    </Container>
  );
}
