import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { IDispatch, IState } from '../store';

// eslint-disable-next-line
export const useAppDispatch = () => useDispatch<IDispatch>();
export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
