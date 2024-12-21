import React from 'react';

export const UserLayout  = React.lazy(()=>import('./User/index.layout'));
export const UserPublicLayout = React.lazy(()=>import('./User/public.layout'));
