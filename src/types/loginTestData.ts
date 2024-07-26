interface LoginTestData {
    id: string;
    username: string;
    password: string;
    status: 'success' | 'failure';
    errorMessage: string;
}