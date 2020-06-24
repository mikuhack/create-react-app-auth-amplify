import React, { useReducer, useEffect } from "react";
import Message from "./Message";
import { listTodos } from "../graphql/queries";
import { onCreateTodo } from "../graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";

function MessageList() {
  const init = { messages: [] };
  const reducer = (state, action) => {
    switch (action.type) {
      case "QUERY":
        return { ...state, messages: action.messages };
      case "SUBSCRIPTION":
        return { ...state, messages: [action.message, ...state.messages] };
      default:
        return state;
    }
  };
  const [content, dispatch] = useReducer(reducer, init);
  const messageList = content.messages.map((message) => (
    <Message
      key={message.id}
      icon={message.icon}
      name={message.name}
      message={message.description}
    />
  ));
  console.log(content);

  useEffect(() => {
    async function getPastMessages() {
      const pastMessages = await API.graphql(
        graphqlOperation(listTodos, { limit: 1000 })
      );
      dispatch({
        type: "QUERY",
        messages: pastMessages.data.listTodos.items.sort(function (a, b) {
          return a.createdAt > b.createdAt ? -1 : 0;
        }),
      });
    }
    getPastMessages();

    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData) => {
        const message = eventData.value.data.onCreateTodo;
        dispatch({ type: "SUBSCRIPTION", message });
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  return <>{messageList}</>;
}

export default MessageList;
