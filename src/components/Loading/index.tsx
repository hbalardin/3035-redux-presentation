import { Spinner, LoadingContainer } from './styles';

interface LoadingProps {
  isLoading: boolean
}

export const Loading = ({ isLoading }: LoadingProps): JSX.Element => (
  <LoadingContainer isLoading={isLoading}>
    <Spinner isLoading={isLoading} />
  </LoadingContainer>
);
