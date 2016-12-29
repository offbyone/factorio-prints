const buildImageUrl = (imgurId, imgurType, suffix) =>
{
	const typeParts = imgurType.split('/');
	return `https://i.imgur.com/${imgurId}${suffix}.${typeParts[1]}`;
};

export default buildImageUrl;
