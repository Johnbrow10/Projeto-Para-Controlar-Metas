import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 8px;
    background-color: #fff;
    align-items: center;
`;

export const TitleList = styled.Text`
    color: #111;
    font-size: 22px;
    padding: 10px 0;
`;

export const ListMetas = styled.FlatList`
    width: 95%;
`;

export const ItemMeta = styled.View`
    color: #111;
    font-size: 16px;
    border-color: #171941;
    border-width: 1px;
    border-radius: 4px;
    margin-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
`;

export const TitleItem = styled.Text`
    color: #111;
    font-size: 18px;
    padding: 5px 0;
`;

export const DescItem = styled.Text`
    color: #111;
    font-size: 14px;
    padding-bottom: 5px;
`;

export const LoadingArea = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    align-items: center;
    justify-content: center;
`;