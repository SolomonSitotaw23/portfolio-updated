export default defineEventHandler(async (event) => {
  console.log('event', event);
  const body = await readBody(event);

  const submitUrl = `https://formspree.io/f/xeojowzz`;
  let response = null;
  await $fetch(submitUrl, {
    method: 'post',
    body: {
      name: body.name,
      email: body.email,
      message: body.message,
    },
  })
    .then((data) => {
      console.log('submit response', data);
      response = data;
    })
    .catch(() => {
      console.log('error');
      response = 'error';
    });
  return { response };
});
