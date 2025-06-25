export const Layout = async (
  component: string | Promise<string>
): Promise<string> => {
  const view = `
    ${component}
  `;

  return view;
};
